import _jobs from '../data/jobs.json';

type Job = {
	id: number;
	title: string;
	company: string;
	description: string;
	url: string;
	skillList: string;
	todo: string;
};

// const jobs: Job[] = _jobs as any[];

export const PageJobs = () => {
	return (
		<div className="page pageJobs">
			<div className="jobs">
				<h2>There are {_jobs.length} jobs:</h2>
				{_jobs.map((job: Job) => {
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
