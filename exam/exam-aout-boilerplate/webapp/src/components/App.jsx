import React, { useContext } from 'react';

import { Layout, Menu } from 'antd'

import { Context as JokeContext } from 'contexts/JokeContext';

const { Header, Content } = Layout



const App = () => {

  const { jokes, scores } = useContext(JokeContext);
  console.log(jokes)
  jokes.map((joke)=>console.log(joke))

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item>Jokes</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <div>
          <h2>Jokes</h2>
          <ul>
            {jokes.map((joke) => (
              <li key={joke._id}>
                <p>{joke.question}</p>
                <p>{joke.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </Layout>
  )
}

export default App
