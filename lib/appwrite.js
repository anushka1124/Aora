import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endPoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ast.aora',
    projectId: '66bee42e0002423ee93f',
    databaseId: '66bee669001805d3f39b',
    userCollectionId: '66bee7120027f693210d',
    videoCollectionId: '66bee73f000fb9800893',
    storageId: '66bee991002e836ab698'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endPoint) // Your Appwrite Endpoint
    .setPlatform(config.platform) // Your application ID or bundle ID.
    .setProject(config.projectId) // Your project ID
;

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    // Register User
    try {

        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        console.log('Account created:', newAccount);

        if(!newAccount){ 
            console.log("error while creating new Account");
            throw Error;
        }

        const avatarUrl = avatar.getInitials(username);

        await login(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        console.log('User created in database:', newUser);
        return newUser;

    } catch (error) {
        if (error.code === 409) {
            console.log('Session already active:', error);
        } else if (error.message.includes('Collection with the requested ID could not be found')) {
            console.log('Collection ID is incorrect:', error);
        } else {
            console.log('Error in creating new user', error);
        }
        throw new Error(error);
    }
}

export const login = async (email, password) => {
    try {

        const session = await account.createEmailPasswordSession(email, password);
        return session;

    } catch (error) {
        console.log('error while login the account', error);
        throw Error(error);
    }
}


export const getCurrentUser = async() => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log("error in fetching current user ",error);
    }
}