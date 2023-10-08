import { Box, Flex, VStack, Text, Avatar, Link } from "@chakra-ui/react"

const UserHeader = () => {
	return (
		<div>
			<VStack gap={4} alignItems={"start"}>
				<Flex justifyContent={"space-between"} w={"full"}>
					<Box>
						<Text fontSize={"2xl"} fontWeight={"bold"}></Text>
						<Flex gap={2} alignItems={"center"}>
							<Text fontSize={"sm"}>user name</Text>
							<Text
								fontSize={"xs"}
								bg={"gray.dark"}
								color={"gray.light"}
								p={1}
								borderRadius={"full"}
							>
								threads.net
							</Text>
						</Flex>
					</Box>
					<Box>
						<Avatar name="Rajath" src="/rajath_profile.jpg" size={"xl"} />
					</Box>
				</Flex>
				<Text>
					{" "}
					Building a MERN stack threads clone with preact vite and ts
				</Text>
				<Flex w={"full"} justifyContent={"space-between"}>
					<Flex gap={2} alignItems={"center"}>
						<Text color={"gray.light"}> 0 followers</Text>
						<Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
						<Link color={""}></Link>
					</Flex>
					<Flex></Flex>
				</Flex>
			</VStack>
		</div>
	)
}

export default UserHeader
