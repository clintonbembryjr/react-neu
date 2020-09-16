import React, { Fragment } from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Spacer from '../Spacer'
import Surface from '../Surface'

export interface InputProps {
  endAdornment?: React.ReactNode,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  size?: 'sm' | 'md' | 'lg',
  startAdornment?: React.ReactNode,
  value?: string,
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  size,
  startAdornment,
  value,
}) => {

  let height = 56
  if (size === 'sm') {
    height = 44
  } else if (size === 'lg') {
    height = 72
  }

  return (
    <Surface elevation="N2">
      <Box
        alignItems="center"
        height={height}
        paddingHorizontal={3}
        row
      >
        {!!startAdornment && (
          <Fragment>
            {startAdornment}
            <Spacer size="sm" />
          </Fragment>
        )}
        <StyledInput
          height={height}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
        {!!endAdornment && (
          <Fragment>
            <Spacer size="sm" />
            {endAdornment}
          </Fragment>
        )}
      </Box>
    </Surface>
  )
}

interface StyledInputProps {
  height: number
}

const StyledInput = styled.input<StyledInputProps>`
  background: none;
  border: 0;
  color: ${props => props.theme.textColor};
  font-size: 18px;
  flex: 1;
  height: ${props => props.height}px;
  margin: 0;
  padding: 0;
  outline: none;
`

export default Input