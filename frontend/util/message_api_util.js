export const fetchMessage = messageId => (
    $.ajax({
        url: `api/messages/${messageId}`
    })
);

export const createMessage = message => (
    $.ajax({
        url: 'api/messages',
        method: 'POST',
        data: { message }
    })
);

export const updateMessage = message => (
    $.ajax({
        url: 'api/messages',
        method: 'PATCH',
        data: { message }
    })
);
