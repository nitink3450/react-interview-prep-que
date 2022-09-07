import React from 'react'

const AxiosFetch = () => {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Axios</th>
                        <th>Fetch</th>
                    </tr>
                    <tr>
                        <td>Axios has url in request object.</td>
                        <td>Fetch has no url in request object.</td>

                    </tr>
                    <tr>
                        <td>Axios is a stand-alone third party package that can be easily installed.</td>
                        <td>Fetch is built into most modern browsers; no installation is required as such.</td>

                    </tr>
                    <tr>
                        <td>Axios enjoys built-in XSRF protection.</td>
                        <td>Fetch does not.</td>

                    </tr>
                    <tr>
                        <td>Axios uses the data property.</td>
                        <td>Fetch uses the body property.</td>

                    </tr>
                    <tr>
                        <td>Axios’ data contains the object.</td>
                        <td>Fetch’s body has to be stringified.</td>

                    </tr>
                    <tr>
                        <td>Axios request is ok when status is 200 and statusText is ‘OK’.</td>
                        <td>Fetch request is ok when response object contains the ok property.</td>

                    </tr>
                    <tr>
                        <td>Axios performs automatic transforms of JSON data.</td>
                        <td>Fetch is a two-step process when handling JSON data- first, to make the actual  request; second, to call the .json() method on the response.</td>

                    </tr>
                    <tr>
                        <td>Axios allows cancelling request and request timeout.</td>
                        <td>Fetch does not.</td>

                    </tr>
                    <tr>
                        <td>Axios has the ability to intercept HTTP requests.</td>
                        <td>Fetch, by default, doesn’t provide a way to intercept requests.</td>

                    </tr>
                    <tr>
                        <td>Axios has built-in support for download progress.</td>
                        <td>Fetch does not support upload progress.</td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default AxiosFetch