let userCount = 0

module.exports = {
	beforeScenario: function (context, ee, next) {
		userCount++
		console.log(`${userCount} concurrent users`)
		return next()
	},
	afterScenario: function (context, ee, next) {
		userCount--
		console.log(`${userCount} concurrent users`)
		return next()
	}
}