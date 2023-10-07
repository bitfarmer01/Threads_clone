import { Button, Container } from "@chakra-ui/react"
import { Route, Router } from "preact-router"
import UserPage from "./Pages/UserPage"
import Home from "./Pages/Home"
import PostPage from "./Pages/PostPage"

const app = () => {
	return (
		<div>
			<Router>
				<Route path="/home" component={Home} />
				<Route path="/:username" component={UserPage} />
				<Route path="/:username/post/pid" component={PostPage} />
			</Router>

			<Container maxW="620px">
				<Button>Hyello</Button>
			</Container>
		</div>
	)
}

export default app
