type TArgs = {
	url: string
	methods: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export const executeApi = (args: TArgs) => {
	fetch(args.url)
		.then((response) => response.json())
		.then((data) => console.log(data))
}
