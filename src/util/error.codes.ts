export class ErrorCode {

    public static DB_COMMUNICATION = 'DevInstincts-001';

    public static dbCommunicationErrorObj = ((message) => {
        return {
            'status': 500,
            'code': ErrorCode.DB_COMMUNICATION,
            'message': 'Error in database communication: ' + message
        };
    });
}
