/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {

		API_SITE: process.env.API_SITE,
		API_URL: process.env.API_URL,
		
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	},
	images: {
		domains: ["res.cloudinary.com", "regalosterrakota.com", "tailwindui.com" , "lh3.googleusercontent.com", "placeimg.com"],
	},
}

module.exports = nextConfig
