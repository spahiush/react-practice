import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


const withLayout = (ChildComponent) => {
    return (props) => {
        return (

            <>
                <Header />
                <ChildComponent {...props} />
                <Footer />
            </>
        )

    }
}

export default withLayout