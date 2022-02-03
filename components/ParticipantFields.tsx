import { useState } from "react"
import { UseFormRegister } from "react-hook-form"

//stylesheets
import styles from "../styles/components/RegistrationForm.module.scss"

const ParticipantFields = ({index, register, errors}: {index: number, register: UseFormRegister<any>, errors:any}) => {

	const [memberError, setMemberError] = useState<string>("")

	const onChangeHandler = () => {
		let message = ""
		setTimeout(() => {
			if (errors.participants && errors.participants[index]) {
				const fieldGroup = errors.participants[index]
				for(let [field] of Object.entries(fieldGroup)) {
					message = fieldGroup[field].message
				}
			}
			setMemberError(message)
		}, 100)
	}

	const fieldName = index == 0 ?  "Team Representative" : `Member ${index+1}`

	return (
		<div className={styles.member_input}>
			<label htmlFor={"participants."+index+".name"}>{fieldName}</label>
			<input
				type="text"
				placeholder="Name"
				id={"participants."+index+".name"}
				className={errors.participants && errors.participants[index] && errors.participants[index].name?.message && styles.error_field}
				{...register("participants."+index+".name", {
					required: `${fieldName}'s Name Is Required`,
					onChange: onChangeHandler,
					shouldUnregister: true,
					minLength: {
						value: 3,
						message: `${fieldName}'s Name Must Be At Least 3 Characters`
					}
				})}
			/>

			<label htmlFor={"participants."+index+".grade"}>Grade</label>
			<input
				type="text"
				placeholder="Grade"
				id={"participants."+index+".grade"}
				className={errors.participants && errors.participants[index] && errors.participants[index].grade?.message && styles.error_field}
				{...register("participants."+index+".grade", {
					required: "Grade Is Required",
					onChange:  onChangeHandler,
					shouldUnregister: true,
					pattern: {
						value: /^([1,2]{2}\s*[A-B]\s*[1,2]|([9]|10)\s*[A-E])$/i,
						message: "Enter A Valid Grade"
					}
				})}
			/>

			<label htmlFor={"participants."+index+".email"}>E-Mail Address</label>
			<input
				type="email"
				placeholder="yourname@example.com"
				id={"participants."+index+".grade"}
				className={errors.participants && errors.participants[index] && errors.participants[index].email?.message && styles.error_field}
				{...register("participants."+index+".email", {
					required: "Email Is Required",
					onChange: onChangeHandler,
					shouldUnregister: true,
					minLength: {
						value: 5,
						message: "Email Must Be At Least 5 Characters"
					},
					pattern: {
						value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
						message: "Enter A Valid Email"
					}
				})}
			/>
			
			<label htmlFor={"participants."+index+".phone"}>WhatsApp Number</label>
			<input
				placeholder="+91 1234567890"
				id={"participants."+index+".phone"}
				className={errors.participants && errors.participants[index] && errors.participants[index].phone?.message && styles.error_field}
				{...register("participants."+index+".phone", {
					required: "WhatsApp Number Is Required",
					onChange: onChangeHandler,
					shouldUnregister: true,
					minLength: {
						value: 10,
						message: "WhatsApp Number Must Be 10 numbers"
					},
					pattern: {
						value: /^(\+91|0)?(\s?)[0-9]{10}$/,
						message: "Enter A Valid WhatsApp Number"
					}
				})}
			/>

			{memberError !== "" && (
				<div className={`${styles.error} ${styles.member_error}`}>
					<p>{memberError}</p>
				</div>
			)}
		</div>
	)
}

export default ParticipantFields