import jobs from '../data/jobs.json';

export const PageJobs = () => {
	return (
		<div className="page pageJobs">
			<div className="jobs">
				<h2>There are {jobs.length} jobs:</h2>
				{jobs.map((job) => {
					return (
						<div className="job" key={job.id}>
							<div className="title">
								<a href={job.url} target="_blank">
									{job.title}
								</a>
							</div>
							<div className="company">{job.company}</div>
							<div className="description">{job.description}</div>
							<div className="skills">{job.skillList}</div>
							<div className="todo">{job.todo}</div>
						</div>
					);
				})}
			</div>{' '}
		</div>
	);
};
