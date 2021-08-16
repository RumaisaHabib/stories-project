<h1>Stories Project</h1>
This project uses ReactJs frontend and Django backend to create a website that displays stories. The database is managed by django while all the functionality and user interface is handled by ReactJs
<h2>Deployment</h2>
To deploy, cd to <code>./frontend</code> run the following commands:
<pre><code>
npm run install
npm run dev
touch wsgi.py
cd ..
python3 manage.py runserver
</code></pre> 

Note: if <code>npm run dev fails</code>, do the following before <code>npm run install</code>:
<pre><code>
npm cache clean --force
</code></pre> 
and delete node-modules and package-lock.json if they are present.

Now open <code>http://127.0.0.1:8000</code> on your browser to view the website.

<h2>Adding/removing stories</h2>
When you first deploy, there will be no stories. To add a story, first create a superuser for yourself by running 
<code>python3 manage.py createsuperuser<code> and create login details. Then deploy the website and open <code>http://127.0.0.1:8000/admin</code> on your browser. Log in with the credentials you just create. 
Now click on 'Storys' under 'Frontend' and add/delete stories to/from your website as you wish.
