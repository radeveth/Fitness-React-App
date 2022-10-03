import React from 'react';

function NoResults() {
    return (
        <>
            <h2 className="text-center text-white mt-5 mb-4">There are no results!</h2>
            <img className="rounded mx-auto d-block" style={{ width: '100px', height: '100px' }} src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji-480x480.png.webp" />
        </>
    )
}

export default NoResults;