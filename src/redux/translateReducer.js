const initialState = {
    short: localStorage.getItem('lang') || navigator.language,
    languages: [],
    translate: {
        title: 'Free anonymous chat without registration | AnonimChat',
        name: 'English',
        short: 'en-US',
        keywords: 'anonim chat, anonymous chat, anonymous chat without registration',
        description: 'Free anonymous chat without registration',
        chatTitle: 'Free anonymous chat without registration | AnonimChat',
        header: {
            chat: 'Chat',
            rules: 'Rules',
            contacts: 'Contacts'
        },
        innerHeader: {
            title: 'Free anonymous chat without \n registration',
            content: 'This free online chat is a function of an anonymous social network. Users can post their messages by typing. The unique advantage of this chat is that it is completely anonymous and there is no need for users to register when joining. The new chat without registration has a reliable system that preserves the complete anonymity of the user in both text and voice communication.',
            button: 'Enter to Chat'
        },
        advantages: {
            title: 'Chat Benefits',
            innerTitle: 'The anonymous chat feature has the following benefits',
            text1: 'Visitors share personal secrets without risks and fears, which makes the atmosphere in the chat as free and open as possible.',
            text2: 'Visitors share personal secrets without risks and fears, which makes the atmosphere in the chat as free and open as possible.',
            text3: 'Security of communication, which is guaranteed by the anonymity of the user',
            text4: 'Enter the anonymous chat for free and communicate without fear of anything.'
        },
        features: {
            title: 'Chat Features',
            innerTitle: 'Despite the fact that you can chat in the chat without registering, it is possible to register voluntarily. In this case, the user must create a password with a length of six characters, including Latin letters and numbers.',
            text1: 'Despite the fact that you can chat in the chat without registering, it is possible to register voluntarily. In this case, the user must create a password with a length of six characters, including Latin letters and numbers.',
            text2: 'Both registered and unregistered users visit the chat for free.',
            text3: 'The main way to communicate with someone on this social network is to respond to the interlocutor\'s messages using anonymous text chat or voice dialogue. This can be done through the chat function at any time of the day.',
        },
        contactsBlock: {
            contact: 'Contacts',
            text: 'You can contact us via the feedback form',
            email: 'Our e-mail',
            name: 'your name',
            purpose: 'Subject of appeal',
            message: 'Your message',
            send: 'Send',
        },
        rulesBlock: {
            content: '1. Be respectful to your interlocutors\n' +
                '1.1. It is forbidden to insult interlocutors.\n' +
                '1.2. It is forbidden to use profanity without the prior consent of the interlocutor.\n' +
                '1.3. Begging is prohibited.\n' +
                '\n' +
                '2. Keep Order Outside the Flirt Room\n' +
                '2.1. It is forbidden to write messages with intimate overtones without the prior consent of the interlocutor.\n' +
                '2.2. It is forbidden to send photos of obscene content without the prior consent of the interlocutor.\n' +
                '2.3. It is forbidden to create topics of an intimate nature and use profanity in conversation topics outside the Flirting room.\n' +
                '2.4. It is forbidden to create anti-scientific topics\n' +
                '\n' +
                '3. Keep clean\n' +
                '3.1. It is forbidden to start empty chats without the intention of answering the interlocutor.\n' +
                '3.2. It is forbidden to create topics of conversation without the intention to communicate on the specified topic.\n' +
                '\n' +
                '4. Don\'t spam\n' +
                '4.1. It is forbidden to advertise any goods and services in a random chat, personal correspondence and conversation topics from free accounts and without the consent of the Administration. For advertising any goods and services from a free account - banned forever.\n' +
                '4.2. It is forbidden to use automation tools to create topics and conduct chats.\n' +
                '4.3. It is forbidden to invite users to go to third-party services at the beginning of a chat and in conversation topics.\n' +
                '\n' +
                '5. Obey the law\n' +
                '\n' +
                'For violation of these rules, your access to the resource may be limited.'
        },
        chatBlock: {
            exit: 'Exit',
            userGender: 'your gender',
            penPalGender: 'Gender looking for',
            any: 'no matter',
            male: 'male',
            female: 'female',
            back: 'go back',
            search: 'start searching',
            stop: 'go back',
            endCall: 'Leave chat',
            nextChat: 'Next conversation',
            report: 'Report this user',
        }
    }
}

export function translateReducer(state = initialState, action) {
    if (action.type === 'setLanguages') {
        return { ...state, languages: action.payload }
    }
    else if (action.type === 'setTranslate') {
        return { ...state, translate: action.payload }
    }
    else if (action.type === 'setLanguage') {
        return { ...state, short: action.payload }
    }

    else return state
}