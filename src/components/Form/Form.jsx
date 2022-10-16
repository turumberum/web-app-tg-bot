import './Form.css'
import React, { useState, useEffect, useCallback } from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')
	const [subject, setSubject] = useState('')
	const {tg} = useTelegram()
	const onSendData = useCallback(() => {
		const data = {
			country,
			city,
			subject
		}

		tg.sendData(JSON.stringify(data))
		// eslint-disable-next-line
	}, [country, city, subject])

	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData)
		return () => {
			tg.offEvent('mainButtonClicked', onSendData)
		}
		// eslint-disable-next-line
	}, [onSendData])

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Sent Form'
		})
		// eslint-disable-next-line
	}, [])

	useEffect(()=> {
		if(!city || !country){
			tg.MainButton.hide()
		}  else {
			tg.MainButton.show()
		}
		// eslint-disable-next-line
	}, [country, city])

	const onChangeCountry = (e) => {
		setCountry(e.target.value)
	}

	const onChangeCity = (e) => {
		setCity(e.target.value)
	}

	const onChangeSubject = (e) => {
		setSubject(e.target.value)
	}

	return (
		<div>
			<div className='form'>
				<h3>Введите данные:</h3>
				<input className='input' type={'text'} value={country} onChange={onChangeCountry} placeholder='Страна'/>
				<input className='input' type={'text'} value={city} onChange={onChangeCity} placeholder='Город'/>
				<select className='select' value={subject} onChange={onChangeSubject}>
					<option value={'legal'}>Юр. лицо</option>
					<option value={'physical'}>Физ. лицо</option>
				</select>
			</div>
		</div>
	);
};

export default Form;