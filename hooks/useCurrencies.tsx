import { useEffect, useState } from "react";

// Type
import { CurrencyType } from "@/types";

const useCurrencies = () => {
    const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
    const [currenciesLoading, setCurrenciesLoading] = useState<boolean>(false);

    /**
     * Set the restricted list of currencies (USD and EUR).
     */
    const fetchCurrencies = async () => {
        setCurrenciesLoading(true);

        try {
            // As per user request: only USD and EUR
            const currencyOptions: CurrencyType[] = [
                { code: "USD", name: "United States Dollar" },
                { code: "EUR", name: "Euro" },
            ];

            setCurrencies(currencyOptions);
        } catch (err) {
            console.log(err);
        } finally {
            setCurrenciesLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrencies();
    }, []);

    return { currencies, currenciesLoading };
};

export default useCurrencies;

