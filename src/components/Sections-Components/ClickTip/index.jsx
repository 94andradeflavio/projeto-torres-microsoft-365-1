import './styles.css'

const clickTip = ({ text, center = false }) => {
    return (
        <div className={`clicktip-wrapper ${ center ? 'center' : '' }`}>
            <span>{ text }</span>
        </div>
    )
}

export default clickTip