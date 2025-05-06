#!/bin/bash

echo "🔧 Initializing PostgreSQL..."

# Install PostgreSQL if it's not already installed
sudo apt update
sudo apt install -y postgresql postgresql-contrib libpq-dev

# Initialize DB if it doesn't exist
if [ ! -d "$HOME/pgdata" ]; then
  initdb -D $HOME/pgdata
fi

# Start PostgreSQL manually in user space
pg_ctl -D $HOME/pgdata -l $HOME/pglogfile start

# Create DB user if it doesn't exist
createdb gitpod || echo "Database already exists or cannot create."

echo "✅ PostgreSQL is ready."
