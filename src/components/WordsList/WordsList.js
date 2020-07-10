import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_WORDS } from '../../graphql/words/queries';
import Box from '../ui/Box';
import Chip from '../ui/Chip/Chip';

function WordsList(props) {
	const { competition } = props;
	const { data, loading } = useQuery(GET_WORDS, {
    variables: { competition },
    fetchPolicy: 'cache-and-network',
	})

	if(loading) return null;

	const words = data?.words;

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