import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    region: 'us-west-1',
    UserPoolId: 'us-west-1_APAKcygrG',
    ClientId: '4us51p322a85qns8o1s4jd862c'
}

const Pool = new CognitoUserPool(poolData)

export default Pool
