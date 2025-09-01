export default function Home() {
	return (
		<main>
			<h1>
				In a Next.js app, the best place to create an assets folder is
				inside the public directory. Why? Files in public are served
				statically and can be accessed directly via URLs (e.g.,
				/assets/image.png). This is the recommended way to store images,
				icons, and other static files. How to do it: Create a folder
				named assets inside your public directory: public/assets/ Place
				your images, icons, and other static files in this folder.
				Reference them in your code using /assets/filename.ext. Let me
				know if you want me to create the folder for you!
			</h1>
		</main>
	);
}
