export type TBaseParams = {
	queryKey?: string[]
	successHandler?: (data: unknown) => void
	errorHandler?: (data: unknown) => void
	settledHandler?: (data: unknown) => void
	enabled?: boolean
}

export type TUserResponse = {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export type TTodoResponse = {
	userId: number
	id: number
	title: string
	completed: boolean
}
