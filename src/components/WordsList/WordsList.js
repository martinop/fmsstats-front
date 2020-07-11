import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_WORDS, GET_GLOBAL_WORDS } from '../../graphql/words/queries';
import Box from '../ui/Box';
import Chip from '../ui/Chip/Chip';

function WordsList(props) {
	const competition = 1;
	const { data, loading } = useQuery(competition ? GET_WORDS : GET_GLOBAL_WORDS, {
		fetchPolicy: 'cache-and-network',
		...competition && { variables: { id: competition } },
	})

	if(loading) return null;

	const words = competition ? data?.competition?.stats?.mostUsedWords : data?.globalStats?.mostUsedWords || [];
	return (
		<Box>
			<h2>Palabras más usadas</h2>
			<div className="flex flex-wrap mt-2">
				{words?.map((word, index) => (
					<div key={`word-stat-${index + 1}`}>
						<Chip text={word.value} circleText={word.count} />
					</div>
				))}
			</div>
		</Box>
	)
}

export default WordsList;