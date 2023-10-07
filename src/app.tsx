import { Button, Container } from "@chakra-ui/react"
import { Route, Router } from "preact-router"
import UserPage from "./Pages/UserPage"
import PostPage from "./Pages/PostPage"
import Header from "./components/Header"

const app = () => {
	return (
		<div>
			<Container maxW="620px">
				<Header />
				<Router>
					<Route path="/:username" component={UserPage} />
					<Route path="/:username/post/pid" component={PostPage} />
				</Router>
			</Container>
		</div>
	)
}

export default app
