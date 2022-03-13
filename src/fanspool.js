import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    region: 'us-west-1',
    UserPoolId: 'us-west-1_sjbL1V1mw',
    ClientId: '4ce0hb26coj3pfutpaujjcc8jm'
}

export default new CognitoUserPool(poolData)
