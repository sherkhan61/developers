



export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}