

function Status({isLoading, hasError}) {
    return (
        <div>
            {" "}
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : hasError ? (
                    <p>Error occurred!</p>
                ) : (
                    <p>Loaded Successfully!</p>
                )
            } {" "}
        </div>
    )
}
export default Status;






