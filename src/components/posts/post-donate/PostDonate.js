import React, { useState } from 'react'
import JsonServer from '../../../services/JsonServer'

const api = new JsonServer()

export default function PostDonate({payments, setPayments, charitiesId, name, currency}) {

    const [checkbox, setCheckbox] = useState({});

    const handleChange = ({target}) => {
        checkbox.name !== 'undefined' && checkbox.name !== target.name ? checkbox.checked = false: checkbox.checked = target.checked;
        setCheckbox(target);
        // const {type, name ,value, checked} = target
        // console.log(`Type: ${type}, Name: ${name}, Value: ${value}, Checked: ${checked}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postPayment()
    }

    const postPayment = async () => {
        const newPayment = {
            charitiesId: parseInt(charitiesId, 10),
            amount: parseInt(checkbox.value, 10),
            currency: currency,
            id: ++payments.length
        }
        // const data = await api.get('payments')
        const ok = await api.post(newPayment, 'payments');
        (ok && api.get('payments')
            .then(data => !setPayments(data) && alert('Thank you for donation.'))
                .catch(error => console.error('Fail to Get Payments:',error)));
    }


    return (
        <div className="Form__donate">
            <header>Select the amout to donate in {currency}</header>
            <form onSubmit={handleSubmit}>
                <div className="Form__checkbox">
                    <label>
                        <input name="box1" type="checkbox" value="10" onChange={handleChange} />10
                    </label>
                    <label>
                        <input name="box2" type="checkbox" value="20" onChange={handleChange} />20
                    </label>
                    <label>
                        <input name="box3" type="checkbox" value="50" onChange={handleChange} />50
                    </label>
                    <label>
                        <input name="box4" type="checkbox" value="100" onChange={handleChange} />100
                    </label>
                    <label>
                        <input name="box5" type="checkbox" value="500" onChange={handleChange} />500
                    </label>
                </div>
                <input type="submit" value="Pay" style={{fontSize: '25px', padding: '5px', width: '160px', cursor: 'pointer'}} />
            </form>
        </div>
    )
}