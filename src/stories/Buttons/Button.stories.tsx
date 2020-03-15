import React from 'react'
import { storiesOf } from '@storybook/react'

// import Button from './Button'
import Button from '@material-ui/core/Button';


storiesOf('Button', module)
    .add('default', () => (
        <Button>Submit</Button>
    ))