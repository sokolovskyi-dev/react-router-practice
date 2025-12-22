import { Form, useActionData, useNavigation } from 'react-router-dom';

export default function Login() {
  const actionResult = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div>
      <h1>Login</h1>
      {/* <p>Placeholder. Next step: action + &lt;Form&gt;.</p> */}

      {actionResult?.error && <p style={{ color: 'crimson' }}>{actionResult.error}</p>}

      <Form method="post">
        <div>
          <input name="email" placeholder="email" defaultValue="admin@test.com" />
        </div>

        <div>
          <input name="password" type="password" placeholder="password" defaultValue="1234" />
        </div>

        <button disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</button>
      </Form>
      <p style={{ fontSize: 12, opacity: 0.7 }}>Hint: admin@test.com / 1234</p>
    </div>
  );
}
