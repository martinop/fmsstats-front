import React from 'react';
import { GET_JUDGES, GET_GLOBAL_JUDGES} from '../../graphql/judges/queries';
import { useQuery } from '@apollo/react-hooks';
import Box from '../ui/Box';

const percentageClass = "text-indigo-600 leading-none text-3xl font-bold";
const imageClass = "m-auto rounded-full w-16 h-16 object-cover";

function JudgesEffectiveness(props) {
	// const { competition } = props;
	const competition = 1;
	const { data, loading } = useQuery(competition ? GET_JUDGES : GET_GLOBAL_JUDGES, {
		...competition && { variables: { id: competition }},
    fetchPolicy: 'cache-and-network',
	})

	if(loading) return null;

	const judgesStats = competition ? data?.competition?.stats?.mostEffectiveJudges : data?.globalStats?.mostEffectiveJudges || [];
	return (
		<Box className="mt-8" borderer>
			<h2>Jueces con más aciertos</h2>
			<div className="flex flex-wrap mt-4">
				{judgesStats?.map(stat => (
					<div className="flex mb-5 pr-4 w-2/4" key={`effectiveness-judge-${stat.id}`}>
						<img src={stat.judge.imageUrl} alt={stat.judge.name} className={imageClass} />
						<div className="ml-4 flex-1">
							<h4>{stat.judge.name}</h4>
							<h2 className={percentageClass}>{stat.effectiveness * 100}%</h2>
						</div>
					</div>
				))}
			</div>
		</Box>
	)
}

export default JudgesEffectiveness;