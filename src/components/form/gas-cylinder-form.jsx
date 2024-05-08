// Select input field for  Gas Kg
// Select input field for prefer color

// textarea field for delivery address
import { useForm } from 'react-hook-form';
import { useCylinderCount } from '../../hooks/cylinder-count';
import { cn } from '../../lib/utils';

export function GasCylinderForm({ className }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div
			className={cn(
				`
                flex flex-col gap-4 p-4 
                bg-gray-100 rounded-lg
                shadow-md
                
                w-full
            space-y-8

            `,
				className
			)}>
			<h1 className='text-[#189a59] font-semibold text-3xl text-center'>
				Purchase
			</h1>
			<form
				className='space-y-6'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex items-start gap-4'>
					<label
						className='flex-1'
						htmlFor='kg'>
						Select Kg
					</label>
					<select
						className='flex-1'
						{...register('kg')}
						id='kg'>
						{[3, 5, 6, 9, 12.5, 15, 19, 45].map(kg => (
							<option
								key={kg}
								value={kg}>
								{kg} Kg
							</option>
						))}
					</select>
				</div>
				<div className='flex items-start gap-4'>
					<label
						className='flex-1'
						htmlFor='color'>
						Select Color
					</label>
					<select
						className='flex-1'
						{...register('color')}
						id='color'>
						{['black', 'blue', 'yellow', 'orange', 'red'].map(color => (
							<option
								key={color}
								value={color}>
								{color}
							</option>
						))}
					</select>
				</div>
				<div className='flex items-start gap-4'>
					<label
						className='flex-1'
						htmlFor='address'>
						Delivery Address
					</label>
					<textarea
						className='flex-1'
						{...register('address')}
						id='address'></textarea>
				</div>
				<div className='flex items-start gap-4'>
					<label
						className='flex-1'
						htmlFor='cylinderCount'>
						Number of Cylinder
					</label>
					<input
						className='flex-1'
						type='number'
						{...register('cylinderCount')}
						id='cylinderCount'
					/>
				</div>
				<div>
					<button
						className={cn(`
                    w-full
                    bg-green-600
                    text-white
                    py-2
                    rounded-md
                    transition
                    duration-200
                    hover:bg-green-700
                    
                    `)}
						type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
