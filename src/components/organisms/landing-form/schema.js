import EmailStep from '@/components/molecules/email-step';
import ExtrasStep from '@/components/molecules/extras-step';
import AddressStep from '@/components/molecules/address-step';
import InformationStep from '@/components/molecules/information-step';
import FloorStep from '@/components/molecules/floor-step';
import ParkingStep from '@/components/molecules/parking-step';
import AmountStep from '@/components/molecules/amount-step';
import ImageStep from '@/components/molecules/image-step';
import ElevatorStep from '@/components/molecules/elevator-step';


const schema = {
	labels: {
		'name': 'Nombre',
		'email': 'Correo electrónico',
		'extra-bbq': 'Zona de BBQ',
		'extra-salon': 'Salón comunal',
		'extra-park': 'Parque de juegos',
		'floor-number': 'Piso del apartamento',
		'address': 'Dirección',
		'parking': 'Aparqueadero',
		'parking-shade': 'Parqueadero cubierto',
		'amount': 'Monto',
		'elevator': 'Cuenta con elevador',
		'image': 'Imagen del apartamento',
	},
	steps: [
		{
			path: 'user-information',
			description: 'En esta sección se recopilará información básica del usuario.',
			name: 'Información del usuario',
			component: InformationStep,
		},
		{
			path: 'user-email',
			description:
				'Necesitaremos una dirección de correo electrónico para ponernos en contacto contigo.',
			name: 'Correo electrónico',
			component: EmailStep,
		},
		{
			path: 'apartament-address',
			description:
				'Será necesario que proporciones la dirección del apartamento a rentar.',
			name: 'Dirección',
			component: AddressStep,
		},
		{
			path: 'apartament-floor',
			description:
				'deberás proporcionar una número de piso del apartamento.',
			name: 'Piso del apartamento',
			component: FloorStep,
		},
		{
			path: 'apartament-extras',
			description:
				'Seleccione los campos extras',
			name: 'Adicionales',
			component: ExtrasStep,
		},
		{
			path: 'apartament-parking',
			description:
				'Si lo requiere con parquedero',
			name: 'Parqueadero',
			component: ParkingStep,
		},
		{
			path: 'apartament-price',
			description: 'Precio del apartamento',
			name: 'Precio',
			component: AmountStep,
		},
		{
			path: 'apartament-image',
			description: 'Agrega una imagen del apartamento que quieres',
			name: 'Imagen',
			component: ImageStep,
		},
		{
			path: 'apartament-elevator',
			description: 'El apartamento cuenta con elevador',
			name: 'Elevador',
			component: ElevatorStep,
		},
	],
};

export default schema;
