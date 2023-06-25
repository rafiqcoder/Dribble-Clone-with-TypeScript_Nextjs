import { g, auth, config } from '@grafbase/sdk'

const user = g.model('user', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.string().optional(),
  description: g.string().optional(),
  linkedinUrl: g.string().optional(),
  projects: g.relation(()=>Project).list().optional(),

})

const Project = g.model('project', {
  title: g.string().length({ min: 3}),
  description: g.string().optional(),
  image: g.url(),
  liveSitUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),

})

export default config({
  schema: g
})
