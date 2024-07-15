const FormInput = ({ type, label }) => {

    return (
        <div>
            <label className="block sr-only">{label}</label>
            {
                type === 'textarea'
                    ?
                    <textarea placeholder={label} required rows="4"
                        className="block min-w-full rounded-lg py-2 px-4 resize-y placeholder:text-sm placeholder:text-bp-darktext"
                    >
                    </textarea>
                    :
                    <input type={type} placeholder={label} required                    
                        className="block min-w-full rounded-lg py-2 px-4 placeholder:text-sm placeholder:text-bp-darktext"
                    >
                    </input>
            }
        </div>
    )
}

export default FormInput;