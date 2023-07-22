export default defineEventHandler(async (event )=> {

	const  {code}=event.context.params
	const {currencyKey}= useRuntimeConfig()

	const uri=`https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=8H8ZlmXEghjFaxWLWVRaBkFr0paK6d0lE4ZaxN0R`

	const {data}= await $fetch(uri)

	return data
})