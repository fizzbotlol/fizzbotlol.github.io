import firebase from 'firebase';
import React from 'react'
import Skeleton from 'react-loading-skeleton';

const db = firebase.firestore();

class Stats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            statsData: new Array(10).fill(undefined)
        }
    }


    async componentDidMount() {
        let docSnap = await db.collection('summoners_na1').doc('QAZx').get();
        let data = docSnap.data().CUSTOM_GAME_STATS;
        let newStatsData = [];

        for (let statKey in data) {
            newStatsData.push({
                name: statKey,
                value: data[statKey]
            })
        }

        this.setState({
            statsData: newStatsData
        })
    }

    renderStatsData() {
        return this.state.statsData.map((data, index) => {
            if (!data) {
                return (
                    <tr>
                        <td><Skeleton /></td>
                        <td><Skeleton /></td>
                    </tr>
                )
            }

            return (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.value}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <section>
                <h2>Table</h2>
                <h3>Default</h3>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderStatsData()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td>100.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        )
    }
}

export default Stats