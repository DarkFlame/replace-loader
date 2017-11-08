export default {
    type: 'object',
    additionalProperties: false,
    properties: {
        data: {
            type: 'object',
            noPick: true
        },
        escape: {
            instanceof: "RegExp"
        },
        evaluate: {
            instanceof: "RegExp"
        },
        imports: {
            type: 'object'
        },
        interpolate: {
            instanceof: "RegExp"
        },
        sourceURL: {
            type: 'string'
        },
        variable: {
            type: 'string'
        },
    }
}