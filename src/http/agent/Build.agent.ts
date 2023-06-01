import { type StartBuild } from 'src/domains'
import { BasicAgent } from './Basic'

class Build extends BasicAgent {
  constructor () {
    super(process.env.REACT_APP_URL_BACK_API + 'build-system', {
      withCredentials: true
    })
  }

  async runBuild ({ uid }: StartBuild) {
    const { data } = await this._http.post('/start-build', { projectUid: uid })
    return data
  }
}

export const BuildAgent = new Build()
