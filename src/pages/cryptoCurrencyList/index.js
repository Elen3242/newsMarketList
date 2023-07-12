import React from 'react';
import Table from '../../components/table';
import Loading from '../../components/loading';
import Pagination from '../../components/pagination';
// import Pagination_1 from '../../components/pagination'

class CryptoCurrencyList extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            error: null,
            page: 1,
        };
    }
    


    async handleGetCurrenciesList() {
        const {page} = this;
        this.setState({
            loading: true,
        });
    
        try {
            const { page } = this.state;
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/?page=${page}&per-page=10`);
            const result = await response.json();
    
            this.setState({
                data: result,
            });
        } catch (error) {
            this.setState({
                error: 'Error Oops',
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }
    
    handlePageChange = (page) => {
        this.setState(
            {
                page: page,
            },
            () => {
                this.handleGetCurrenciesList();
            }
        );
    };
    
    handleChangePagination = (direction) => {
        const {page} = this.state;
        const currentPage = direction === 'next' ? page + 1 : page - 1;
        this.setState({
            page: currentPage
        }, this.handleGetCurrenciesList)
    }

    componentDidMount() {
        this.handleGetCurrenciesList();
    }
    
    render() {
        const { loading, error, page, data } = this.state;
        const totalPages = 10; // Set the total number of pages based on your data

        if(error) {
            return (
                <div className='error'>
                    <p>{error}</p>
                </div>
            )
        }
        if (loading) {
            return (
                <div className="loading-container">
                    <Loading width="80px" height="80px" />
                </div>
            );
        }
    
        if (error) {
            return <div>{error}</div>;
        }
    
        return (
            <div>
                <Table currencyList={data} />
                {/* <Pagination currentPage={page} totalPages={totalPages} onPageChange={this.handlePageChange} /> */}
                <Pagination 
                page ={page}
                onHandleChangePagination={this.handleChangePagination}
                />
            </div>
        );

       
    }
    
}

export default CryptoCurrencyList;