const tg = window.Telegram.WebApp;

export function useTelegram() {

	const onClose = () => {
		tg.close()
	}

	const onToggleButton = () => {
		if(tg.MainButtom.isVisible){
			tg.MainButtom.hide()
		} else {
			tg.MainButtom.show()
		}
	}

	return {
		tg,
		onClose,
		onToggleButton,
		user: tg.initDataUnsafe?.user
	}
}