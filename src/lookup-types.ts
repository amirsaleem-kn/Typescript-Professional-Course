type ApiResponse = {
    consent: {
        hasProvided: false,
        provider: string
    },
    payment: {
        creditCardToken: string,
        issuer: string;
    }
}

// ApiResponse["payment"] becomes a lookup type for getPayment method
function getPayment(): ApiResponse["payment"] {
    return {
        creditCardToken: "789",
        issuer: "Gecko Inc."
    }
}