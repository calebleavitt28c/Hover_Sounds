// import { CognitoUser } from 'amazon-cognito-identity-js'
// import React, { useState, useContext } from 'react'
// import Pool from '../../FansPool'
// import { SignupContext } from './Signup'


// const VerifyEmail = () => {
//     let { username } = useContext(SignupContext) || {}

//     const [verificationCode, setVerificationCode] = useState('')

//     const onSubmit = (event) => {
//         event.preventDefault()

//         const cognitoUser = new CognitoUser({
//             Username: username,
//             Pool
//         })

//         cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
//             if (err) {
//                 console.error(err)
//             } else {
//                 console.log(result)
//             }
//         })
//     }

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <label>Verification Code</label>
//                 <input value={verificationCode} onChange={event => setVerificationCode(event.target.value)} />

//                 <button type='submit'>Verify Email</button>
//             </form>
//         </div>
//     )
// }

// export default VerifyEmail