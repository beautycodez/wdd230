import PropTypes from 'prop-types'
export function Button( { text, name = 'Usuario' }) {
    return <button onClick={function() {
        console.log("hola mundo")
    }}>
        {text} - {name}
    </button>
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}