import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: "us-west-1_vsUvrhcys",
    ClietId: "1cba97aq180lns185ebf6p6ov4"
}

export default new CognitoUserPool(poolData)