import * as React from 'react'
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/core'
import { FaMoon, FaSun } from 'react-icons/fa'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue('dark', 'light')
	const SwitchIcon = useColorModeValue(FaMoon, FaSun)

	return (
		<IconButton
			size='md'
			fontSize='lg'
			variant='ghost'
			color='current'
			marginLeft='2'
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			title={`Switch to ${text} mode`}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	)
}
export default ColorModeSwitcher
