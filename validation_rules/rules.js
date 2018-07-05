module.exports = {
	category: {
		create: {
			name: {required: true, message: 'Name cannot be empty'},
			desc: {required: true, type: 'email'}
		},
		edit: {
			name: {required: true},
			desc: {required: true}
		}
	},
	product: {},
	user: {}
};