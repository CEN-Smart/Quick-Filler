import { useState, useEffect } from 'react';
import { Xumm } from 'xumm';
import { cn } from '../../lib/utils';

// Accessing the API key via Vite's environment variable handling
const xumm = new Xumm(import.meta.env.VITE_XUMM_API_KEY);

function ConnectWallet({ btnText, className }) {
	const [account, setAccount] = useState('');

	useEffect(() => {
		function output() {
			const _account = window.localStorage.getItem('xumm_address');
			if (_account) {
				setAccount(_account);
				console.log('account on first render is ', _account);
			}
		}
		output();
	}, []);

	useEffect(() => {
		async function fetchAccount() {
			const a = await xumm.user.account;
			setAccount(a ?? '');
			console.log('about to set account');
			if (a) {
				localStorage.setItem('xumm_address', a);
			}
		}
		fetchAccount();
	}, []);

	const logout = () => {
		xumm.logout();
		setAccount('');
		localStorage.removeItem('xumm_address');
	};

	const login = async () => {
		const _account = localStorage.getItem('xumm_address');
		if (_account) {
			console.log(_account);
			if (_account.length === 0) {
				await xumm.authorize();
			} else {
				setAccount(_account);
			}
		} else {
			await xumm.authorize();
		}
	};

	return (
		<div className={cn(``, className)}>
			{account === '' && !xumm.runtime.xapp ? (
				<button
					onClick={login}
					className='bg-[#189a59] py-2 px-3 text-white rounded-lg font-roboto font-medium'>
					{btnText}{' '}
				</button>
			) : null}
			{account !== '' ? (
				<>
					<button
						onClick={logout}
						className='button'>
						Disconnect
					</button>
				</>
			) : null}
		</div>
	);
}

export default ConnectWallet;
